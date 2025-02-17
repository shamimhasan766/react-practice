import './App.css';
import BioData from './components/Biodata';
import Counter from './components/Counter';

const bio_datas = [
  {
    name: "Abul Hasan (Shamim)",
    img: "https://i.ibb.co.com/KxY6bDWm/rsz-1rsz-21691393124617-1-removebg5245.png",
    designation: "Software Engineer | PHP | Laravel",
    education: "B.Sc. in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    socialLinks: [
      {platform: "Facebook", link: "https://www.facebook.com/shamim.hasan.755/", color: "#1877F2"},
      {platform: "Twitter", link: "https://www.x.com/", color: "#1877F2"},
      {platform: "LinkedIn", link: "https://www.linkedin.com/in/shamimhasan755/", color: "#0A66C2"},
      {platform: "GitHub", link: "https://github.com/shamimhasan766", color: "#000"},
    ]  
  },
  {
    name: "Sagor Raihan",
    img: "https://i.postimg.cc/C5bfDcVk/475733404-1851006962305000-8930433285405452171-n.jpg",
    designation: "Software Engineer | Flutter",
    education: "B.Sc. in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    socialLinks: [
      {platform: "Facebook", link: "https://www.facebook.com/shamim.hasan.755/", color: "#1877F2"},
      {platform: "GitHub", link: "https://github.com/shamimhasan766", color: "#000"},
    ]
  },
  {
    name: "Sumit Saha",
    img: "https://i.postimg.cc/C5bfDcVk/475733404-1851006962305000-8930433285405452171-n.jpg",
    designation: "Software Engineer | Flutter",
    education: "B.Sc. in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    socialLinks: [
      {platform: "Facebook", link: "https://www.facebook.com/shamim.hasan.755/", color: "#1877F2"},
      {platform: "GitHub", link: "https://github.com/shamimhasan766", color: "#000"},
    ]
  },
  {
    name: "Asief Mahir",
    img: "https://i.postimg.cc/C5bfDcVk/475733404-1851006962305000-8930433285405452171-n.jpg",
    designation: "Software Engineer | Flutter",
    education: "B.Sc. in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    socialLinks: [
      {platform: "Facebook", link: "https://www.facebook.com/shamim.hasan.755/", color: "#1877F2"},
      {platform: "GitHub", link: "https://github.com/shamimhasan766", color: "#000"},
    ]
  },
  {
    name: "Simanta Chowdhury",
    img: "https://i.postimg.cc/C5bfDcVk/475733404-1851006962305000-8930433285405452171-n.jpg",
    designation: "Software Engineer | Flutter",
    education: "B.Sc. in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    socialLinks: [
      {platform: "Facebook", link: "https://www.facebook.com/shamim.hasan.755/", color: "#1877F2"},
      {platform: "GitHub", link: "https://github.com/shamimhasan766", color: "#000"},
    ]
  },
]

function App() {
  return (
    <Counter />
  );
}


export default App;
