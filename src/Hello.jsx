import './Hello.css'
function MyButton(){
    function handleClick(){
        alert("You Click button!");
    }
    return (
        <button onClick ={handleClick} style={{backgroundColor: '#99ccff', color: 'black'}}>
            I am button
        </button>
    );
}
function MyButton()


function Hello (){
    let name= "Natthapong Saehaw";
    let isAdmin = !true;
    let content;
    if (isAdmin){
        content=<MyButton/>
    }
    else{
        content=<b> You are not admin </b>;
    }
    const products=[
        {title:"Cabbage",id: 1},
        {title:"Garlic",id: 2},
        {title:"Apple",id: 3}
    ];
    const listItems=products.map(products=>
        <li key={products.id}>
            {products.title}
        </li>
    );

    return(<div style={{border: "10px solid #99ccff"}}>

        <h1 className='redtopic'> Hello,{name.toUpperCase()}</h1>
        <h2>I'm computer engineer</h2>
        <ol>{listItems}</ol>
        <MyButton/>
        <hr/>
        </div>);
}
export default Hello;