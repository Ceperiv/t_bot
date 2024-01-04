export function onRequest(context:any){
    const data = {id:1, text:'Привіт'}
    return new Response(JSON.stringify(data))
}
