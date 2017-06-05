import React, { Component } from 'react'

export default function Counter({
  count,
  handlers: {
    increment,
    decrement
  }
}) {
  return (
    <div>
      <button onClick={ decrement } children='−' />
      <span>{ count }</span>
      <button onClick={ increment } children='+' />
    </div>
  )
}