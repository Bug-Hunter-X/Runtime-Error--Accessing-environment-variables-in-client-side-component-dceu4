```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  // Access the environment variable via getServerSideProps or similar methods.
  // Note: This example provides a simple way, a more robust solution is advised for production applications.   
  const myVariable = router.query.myVariable || 'Default Value';
  return (
    <div>
      <h1>About Page</h1>
      <p>My Variable: {myVariable}</p>
    </div>
  );
}

export async function getServerSideProps(context){
  return {
    props: {
      myVariable: process.env.MY_VARIABLE || 'Default Value'
    }
  }
}
```