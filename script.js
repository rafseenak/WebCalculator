function numbers(val)
{
    document.getElementById("screen").value+=val
}
function clear1()
{
    document.getElementById("screen").value=""
}
function equal()
{
    try
    {
        var text=document.getElementById("screen").value
        var result=eval(text)
        document.getElementById("screen").value=result
    }
    catch(err)
    {
        document.getElementById("screen").value="Error"
    }
}