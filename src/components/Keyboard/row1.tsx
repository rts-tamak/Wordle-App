

const RowData1 = ["Q", "w" ,"E", "R", "T", "Y", "U", "I", "O" ,"P"];

const Row1 = () => {
  return (
    <div>
        {
            RowData1.map( (ele) => {
                return <div>
                    {
                        ele
                    }
                </div> 
            })
        }
    </div>
  )
}

export default Row1;