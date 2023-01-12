import React from 'react'
import {Table, Dropdown, DropdownButton} from 'react-bootstrap'
const DataTable = () => {
  return (
    <>
      <Table bordered responsive="xl" className='text-center'>
    <thead>
      <tr>
        <th> Name<br/><sm>(Job Title)</sm></th>
        <th>Age</th>
        <th>NickName</th>
        <th>Employee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John<br/><span>Founder & CEO</span></td>
        <td>40</td>
        <td>Marry</td>
        <td className='text-center'><img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-geometric-circle-dot-shape-with-ring-pattern-basic-bold-tal-revivo.png"/></td>
      </tr>
      <tr>
        <td>Kim<br/><span>Developer</span></td>
        <td>23</td>
        <td>Kaimoz</td>
        <td className='text-center'><img src="https://img.icons8.com/fluency-systems-filled/24/000000/check-all.png"/></td>
      </tr>
      <tr>
        <td>Jack<br/><span>Designer</span></td>
        <td>25</td>
        <td>Waide</td>
        <td className='text-center'><img src="https://img.icons8.com/small/24/000000/open-box.png"/></td>
      </tr>
    </tbody>
  </Table>
    </>
  )
}

export default DataTable