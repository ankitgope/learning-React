# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


In this project we are using react router so in this we have to use RouterProvider router={routter}/>
***LAYOUT.JSX****
Creating Layout.jsx ut can be any name Infact we can do the job in App.jsx but for better understanding we are doing it here 
 ------------ so in here we are passing the header Foooter dynamically 
---------------for this dynamic passing we gota OUTLET {outlet}
we need to import that from react router dom
 
***WORKING OF THE OUTLET***
This Outlet we use the layout as a base and the jsx file given above or below will keep same or if we give it at bottom the top two will bw fixed and bottom will change anywhere canbe used 
NOW WE NEED TO INFORM THE INDEX.JSX FILE THAT I AM USING A LYAOUT.JSX IN WHICH WE ARE GIVING ALL THE HEADER FOOTER BECAUSE ROUTING IS HAPPENING -> INSIDE HOME THERE IS ABOUT US 
             INSIDE HOME THERE IS CONTACT US
SO NESTING IS OCCURING 

function Layout() {
  return (
    <>
      <Header/> // header wil be same 
           <Outlet/> //  the change will occure here 
      <Footer/> // footer will be same 
    </>
  )
}

****USER COMPONRNT***



