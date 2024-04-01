import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
  ButtonGroup,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ButtonGroupComponent from "@/components/ButtonGroupComponent";

export function Home() {

  return (
    <>
      {/* <div className="container"> */}
      <div className="relative flex flex-col h-screen content-center items-center justify-center pt-16 pb-72 mb-80"  >
        <div className="mt-80">
          <div className="mt-80 flex flex-row items-start justify-between">
            {/*div awaal*/}
            <div className="mt-40" >
              <div style={{ fontSize: '15px', fontFamily: 'inherit', textAlign: 'left' }}>
                Isi ulang tanpa batas
              </div>
              <div className="flex flex-row" >
                <div style={{ fontSize: '55px', fontFamily: 'inherit', textAlign: 'left', fontWeight: 'bold' }}>
                  Klik,
                </div>
                <div style={{ fontSize: '55px', fontFamily: 'inherit', textAlign: 'left', fontWeight: 'bold', color: '#E48F45' }}>
                  Isi Ulang,
                </div>
              </div>
              <div style={{ fontSize: '55px', fontFamily: 'inherit', textAlign: 'left', fontWeight: 'bold' }}>
                Nikmati
              </div>
              <div>
                <div className="flex flex-row">
                  <a
                    href="#"
                    className="mr-2 block max-w-md p-4 border border-solid border-orange-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    style={{ width: '250px', height: '160px' }}
                  >
                    <img
                      alt="Card Image"
                      src="/img/247.png"
                      className="h-12 w-auto mb-2"
                    />
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      Dukungan Teknis 24/7
                    </h5>
                    <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                      Layanan pelanggan dan dukungan teknis yang responsif.
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block max-w-md p-4 border border-solid border-orange-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    style={{ width: '250px', height: '160px' }}
                  >
                    <img
                      alt="Card Image"
                      src="/img/paketBeragam.png"
                      className="h-12 w-auto mb-2"
                    />
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      Pilihan Paket Beragam
                    </h5>
                    <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                      Fleksibilitas dalam memilih paket sesuai kebutuhan.
                    </p>
                  </a>
                </div>
                <a
                  href="#"
                  className="mt-2 block max-w-xl p-4 border border-solid border-orange-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center"
                  style={{ width: '510px', height: '90px' }}
                >
                  <p className="flex-1 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Pilih layanan kami karena jaminan konektivitas, internet cepat, dukungan pelanggan sepanjang waktu, solusi bisnis terkini, dan fokus pada kepuasan Anda.
                  </p>
                  <button
                    type="button"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Beli Sekarang
                  </button>
                </a>

              </div>
            </div>
            {/*div kedua*/}
            <div className="items-start mt-40 ml-10">
              <img
                alt="Image"
                src="/img/homePeople.png"
                // className="h-120 w-auto"
                style={{ width: '500px', height: '500px' }}
              />
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '25px', fontFamily: 'inherit', textAlign: 'left', fontWeight: 'bold', marginLeft:'100px' }}>
            Produk Terbaik Untukmu!
          </div>
          <div className="grid gap-6 row-gap-2 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            <a href="/" aria-label="View Item" className="relative block">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-60 md:h-64 xl:h-80"
                  src="/img/telkomsel.png"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col justify-between px-6 py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div>
                    <p className="mb-4 text-lg font-bold text-gray-100 text-center">TELKOMSEL</p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-lg text-white font-bold mb-6">Rp. 25.000</p>
                  </div>
                  <div className="self-end">
                    <img src="/img/love.png" alt="Love Logo" className="h-20 w-auto" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item" className="relative block">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="/img/xl.png"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col justify-between px-6 py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div>
                    <p className="mb-4 text-lg font-bold text-gray-100 text-center">XL</p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-lg text-white font-bold mb-6">Rp. 25.000</p>
                  </div>
                  <div className="self-end">
                    <img src="/img/love.png" alt="Love Logo" className="h-20 w-auto" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item" className="relative block">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="/img/indosat.png"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col justify-between px-6 py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div>
                    <p className="mb-4 text-lg font-bold text-gray-100 text-center">TELKOMSEL</p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-lg text-white font-bold mb-6">Rp. 25.000</p>
                  </div>
                  <div className="self-end">
                    <img src="/img/love.png" alt="Love Logo" className="h-20 w-auto" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item" className="relative block">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="/img/smartfren.png"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col justify-between px-6 py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div>
                    <p className="mb-4 text-lg font-bold text-gray-100 text-center">TELKOMSEL</p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-lg text-white font-bold mb-6">Rp. 25.000</p>
                  </div>
                  <div className="self-end">
                    <img src="/img/love.png" alt="Love Logo" className="h-20 w-auto" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Footer />
      </div>
      {/* </div> */}
    </>
  );
}

export default Home;
