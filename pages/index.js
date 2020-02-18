import { useState } from "react";

const Index = () => {
    const [text,setText] = useState([
        { Name: 'Aimer' },
        { Name: 'Arima' },
    ])
    const [subtext, setSubtext] = useState('')
    const Enter_ =(e)=>{
        e.preventDefault();
        setText([...text,{Name:subtext}])
    }
    return (
        <div>
            <div>
                <form onSubmit={Enter_}>
                    <input type="text" name="name"  onChange={(e)=>setSubtext(e.target.value)} />
                </form>
            </div>
            <div>
                {
                    text.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.Name}
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Index;
