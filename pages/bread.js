import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

function handleClick(event) {
  event.preventDefault();
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <p >About</p>
      </Breadcrumbs>
    </div>
  );
}