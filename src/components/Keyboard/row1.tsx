

const RowData1 = ["Q", "w" ,"E", "R", "T", "Y", "U", "I", "O" ,"P"];

const Key = ({ele}:{ele:string})=>{
    return (
    <div>
        {ele}
    </div>
    ) 
}

const Row1 = () => {
  return (
    <div>
        {
            RowData1.map( (ele) => {
                return <Key ele={ele}/>
            })
        }
    </div>
  )
}

export default Row1;