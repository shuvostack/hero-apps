const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("install");

    if(storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else{
        return [];
    }

}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        alert('This is already exist')
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("install", data);
    }
}

export {addToStoredDB, getStoredApp};