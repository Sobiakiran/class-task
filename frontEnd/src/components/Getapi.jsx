import React from 'react'

const Getapi = () => {
    const [product, setProduct] = useState([])
    const fetchData = async () =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json()
      setProduct(data)
      console.log(product)
    }
  
    useEffect(() =>{
      fetchData()
    }, [])
  return (
    <div>
      {
        product.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="" width={"100px"} height={"100px"}/>
            <h1>{product.title}</h1>
          </div>
        ))
       }
    </div>
  )
}

export default Getapi
