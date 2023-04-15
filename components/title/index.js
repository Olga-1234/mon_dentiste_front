import style from "./style.module.css"
const  Title=({text, className})=> {
    return (
        <div className={className}>
           <h1 className={` ${style.montserat}`}>{text}</h1> 

           
        </div>
    )
}
export default Title;