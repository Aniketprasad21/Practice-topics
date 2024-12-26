import PropsChild from "./PropsChild";
import ChlidA from "./ChildA";
import PropsUser from "./PropsUser";
const PropsParent = () => {
  let data = "Hello Universe";
  let arr = [10, 20, 30, 40, 50];
  let users = [
    { id: 101, name: "Aniket", company: "tcs", desigantion: "developar" },
    { id: 102, name: "Ram", company: "Wipro", desigantion: "Tester" },
    { id: 103, name: "Laxman", company: "IBM", desigantion: "HR" },
    { id: 104, name: "Pinku", company: "HCL", desigantion: "developar" },
    { id: 105, name: "Abc", company: "Q-spider", desigantion: "developar" },
    { id: 106, name: "bcd", company: "Capgi", desigantion: "developar" },
  ];

  let product = [
    {id:101,title:"laptop",img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000"},
    {id:102,title:"Mobile",img:"https://cdn1.smartprix.com/rx-iVyp4t2Vm-w1200-h1200/Vyp4t2Vm.jpg"}
  ]
  return (
    <div>
      <h2>Props Example</h2>
      {/*<PropsChild >* */}
      {/*<PropsChild data={{data,arr}}></PropsChild>*/}
      {/*<PropsUser users={users}></PropsUser>*/}
      <ChlidA/>
    </div>
  );
};
export default PropsParent;