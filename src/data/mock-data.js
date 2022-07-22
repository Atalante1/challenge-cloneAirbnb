import {
    MdOutlineApartment,
    MdHouseSiding,
    MdOutlineWater,
    MdCabin,
  } from 'react-icons/md';
  import { BsSnow } from 'react-icons/bs';
  import { BiHomeAlt } from 'react-icons/bi';
  import {
    GiKidSlide,
    GiSpaceNeedle,
    GiCampingTent,
    GiLightningDome,
    GiEvilTree,
    GiWaveSurfer,
    GiMountainCave,
    GiCaveEntrance,
    GiGolfFlag,
  } from 'react-icons/gi';
  import { AiOutlineCoffee } from 'react-icons/ai';
  import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
  import { RiEarthquakeFill } from 'react-icons/ri';

  export const locationsTab = [
    { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
    { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
    { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
    { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
    { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
    { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
    { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
    { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
    { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
    { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
    { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
    { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
    { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
    { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
    { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
    { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
    { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
    { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
    { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
    { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
  ];

  export const locations =[
    {
        id: 1,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Gardon Reveira, Italy',
        days: 'Oct 2-9',
        price: '$14,999 CAD night',
        isNew: true,
        rating: 4.5,
      },
      {
        id: 2,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Joshua tree, USA',
        days: 'Sep 2-11',
        price: '$3000 CAD night',
        isNew: false,
        rating: 4.99,
      },
      {
        id: 3,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Uvita rosa, Costa Rica',
        days: 'Nov 19-22',
        price: '$1,129 CAD night',
        isNew: true,
        rating: 4.6,
      },
      {
        id: 4,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Navidad, Chile',
        days: 'Sep 13-18',
        price: '$208 CAD night',
        isNew: false,
        rating: 4.2,
      }

  ]
 