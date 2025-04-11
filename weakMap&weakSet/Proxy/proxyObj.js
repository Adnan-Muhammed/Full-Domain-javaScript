  const target = {
    name:"ASDF",
    place:"tvm"
  }

  const handler ={
    get:(target, prop)=>{
        return prop in target ? target[prop]:"not found"
    }
  }

  let proxyObj = new Proxy(target, handler)

  console.log(proxyObj.name);

