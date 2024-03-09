import warnings

class Repository :

    def __init__(self, repository) :
        self.repository = repository
        self.name = self.repository.name
        self.traffic = self.getTraffic()

    def __str__(self) :
        return self.repository.name
    
    def getTraffic(self) :
        try : 
            _traffic = self.repository.get_views_traffic()
            return dict(filter(lambda x : x[0] != "views", _traffic.items()))
        except Exception as e : 
            warnings.warn(f"An error occured : {e} during traffic handling for this repository : {self.repository.name}")
            return {"count": 0, "uniques": 0}
        
    