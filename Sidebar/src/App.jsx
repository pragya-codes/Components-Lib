import { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
function App() {
  const [toggle, setToggle] = useState([])
  const arr = [
    {
      id: 1,
      name: "Main",
      child: [
        { sid: 1, sname: "sub page 1" },
        { sid: 2, sname: "sub page 2" },
        { sid: 3, sname: "sub page 3" }
      ]
    },
    {
      id: 2,
      name: "Users",
      child: [
        { sid: 1, sname: "User 1" },
        { sid: 2, sname: "User 2" },
        { sid: 3, sname: "User 3" }
      ]
    }
  ]

  const handleToggle = (id) => {
    const newToggle = toggle.includes(id) ? toggle.filter((i) => i !== id) : [id];
    setToggle(newToggle)
    console.log(newToggle)
  }
  return (
    <div className="h-screen bg-slate-200 w-52 p-4 ">

      {arr.map((item) => (
        <div key={item.id}>
          <Link to={`/${item.name}`}><div className="font-semibold h-15 w-24 bg-pink-700 p-2 mt-5 rounded-md " onClick={() => handleToggle(item.id)}>{item.name}</div></Link>
          {toggle.includes(item.id) &&
            <>

              <div className="box ml-4 h-4 w-7 border-b-2 border-l-2 border-pink-400"></div>
              <div className="ml-4 h-6 w-7 border-r-2 border-pink-400"></div>

              <div className="ml-11 flex flex-col text-sm">
                {item.child.map((c) => (
                  <div key={c.sid}>
                    <Link to={`/${item.name}/${c.sid}`}><div className="cursor-pointer flex items-center -ml-2 gap-2"><GoDotFill className='fill-pink-400' /> {c.sname}</div></Link>
                    <div className="-ml-7 h-6 w-7 border-r-2 border-pink-400"></div>
                  </div>
                ))}

              </div>
            </>}
        </div>
      ))}
    </div>
  )
}

export default App
