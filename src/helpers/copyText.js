export const copyText = async (text, ref)=>{
    
    try{
        await navigator.clipboard.writeText(text);
        return true;
    }catch(err){
        console.log(err);
    }
}