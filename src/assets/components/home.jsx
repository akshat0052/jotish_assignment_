import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Home() {

  const [data, setData] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    fetch("/api/gettabledata.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "test",
        password: "123456",
        table: "employee_table"
      })
    })
      .then(res => res.json())
      .then(result => {
        console.log("Full API Response:", result);
        setData(result.TABLE_DATA.data)
      }
      )
      .catch(err => console.error(err));
  }, []);
  return (
    <>

      <div>
        <table className='min-w-full border border-pink-400 rounded-lg overflow-hidden shadow-lg'>
          <thead className='bg-pink-500 text-white'>
            <tr>
              <th className="py-2 px-4 border-b text-left">Compani</th>
              <th className="py-2 px-4 border-b text-left">Post</th>
              <th className="py-2 px-4 border-b text-left">city</th>
              <th className="py-2 px-4 border-b text-left">No</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
            </tr>
          </thead>
          <tbody >
            {data.map((row, index) => (
              <tr key={index}
              className='bg-pink-50 hover:bg-pink-200 cursor-pointer transition-colors duration-300'
                onClick={() => Navigate("/Details", { state: { empolyees: row } })}
              >
                {row.map((item, idx) => (
                  <td key={idx} className='py-2 px-6 border-b border-pink-300'>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}