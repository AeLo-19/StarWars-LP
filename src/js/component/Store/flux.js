const getState = ({ getStore, getActions, setStore })
    const apiUrl = "https://swapi.co/api/";
    return {
        store: {
            planets: [],
            people: [],
            vehicles: []
        },
        actions: {
            getResources: async (
                resourceName,
                urlQuery= "",
                resourceId= ""
            ) => {
                let resources = [];
                let url = apiUrl + resourceName + "/";
                if (urlQuery != "") {
                    url += urlQuery;
                } else {
                    url +=  resourceId;
                }
                try{
                    let response = await fetch (url, {
                        headers: {
                            "Content-Type": "application/JSON"
                        },
                        method: "GET"
                    });
                    if (response.ok) {
                        let data = await response.json();
                        resources = data.results;
                        console.log(resources.length);
                    } else {
                        console.log(response.status, " ", response.statusText)
                    }
                } catch (error) {
                    console.log("Error en el GET de flux")
                }
                setStore({
                    [resourceName]: resources
                });
            }
        }
    };
 export default getState;