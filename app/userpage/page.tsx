import React from "react";
import Navbar from "../components/navbar";
import Content from "../components/content";
import Link from "next/link";
import SecondC from "../components/secondContent";
import ThirdC from "../components/thirdContent";

export const metadata = {
    title: "Magang Online",
};

const userpage = () => {
    return (
        <>

        <Navbar/>
        <div style={content}>
        <p style={text}>Ambil Kendali</p><br />
        <p style={text}>Masa Depanmu</p><br />
        <p>Kampus Merdeka adalah cara terbaik berkuliah. <br />
        Dapatkan kemerdekaan untuk membentuk masa depan yang  <br />
        sesuai dengan aspirasi kariermu.</p>
        <div className="flex flex-col lg:flex-row mt-5">
        <button className="mt-5 lg:mt-0" style={buttonLeft}><Link href="/detail">Telusuri Program</Link></button>
        <button className="mt-5 lg:mt-0 ml-0 lg:ml-5" style={buttonRight}>Telusuri Program</button>
        </div>
        </div>
        <div style={content2}>
            <p className="mt-7 ml-3" style={{ color: 'white', }}>Program Unggulan</p>
        </div>
        <div style={content3}>
        <SecondC/>
        </div>
        <div style={pages}>
        <ThirdC />
        </div>
       
        </>
    )
}


    const content3 = {
        padding: '14px'
    }
    const content2 = {
        height: '10rem',
        padding: '14px',
        fontSize: '40px',
        fontWeight: 'bold',
    }

    const buttonLeft = {
        padding: '8px 35px',
        backgroundColor: '#0766AD',
        fontWeight: 'bold',
        color: 'white',
        borderRadius: '15px',
        
    }
    const buttonRight = {
        padding: '8px 35px',
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '15px',
        
    }
    const content = {

        color: 'white',
        height: 'auto',
        padding: '124px',
        backgroundImage: 'url("/react1.jpg")',
        opacity: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white'
       
        
    }

    const text = {
        fontSize: '50px',
    }
    const pages = {
        padding: '34px',
        marginTop: '7rem',
        backgroundColor: '#1F2937',
    }

export default userpage;