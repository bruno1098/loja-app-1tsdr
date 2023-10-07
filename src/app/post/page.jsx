import Link from 'next/link'
import React from 'react'


export default function post(){
return (
  <div>
    <h1>Post</h1>
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="./post1/post1.jsx">Post1</Link></li>
        <li><Link href="./post2/post2.jsx">Post2</Link></li>
    </ul>
  </div>
)
}