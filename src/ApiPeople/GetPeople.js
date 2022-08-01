import axios from "axios";

async function GetPeople() {
    return await axios.get('https://dummyapi.io/data/v1/post?limit=20', {
        headers: {
            'app-id': '62e386b37df47da04f51399f'
        }
    });
}
export {
    GetPeople,
}