export async function sendToServer(data){
    let response = await fetch('/somewhere', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });

    let result = await response.json();

    //return result;
    return data;
}