import React from 'react'
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';


const about = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
        <Header/>
      <h1 className="text-2xl font-bold">About Page</h1>
      <Button size="small" shape="rounded-sm" label="Small Button" />
      <Button size="medium" shape="rounded-md" label="Medium Button" />
      <Button size="large" shape="rounded-full" label="Large Button" />
    </div>
  )
}

export default about