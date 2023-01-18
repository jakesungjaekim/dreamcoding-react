import './App.css';

function App() {

  const myName = "Jake"
  const LISTS = ['안녕', '이건', 'Map 메서드를 위한', '리스트야']

  return (
    <div className="container">
      <h1>hello</h1>
      <h1 className='text'>{`Hello !! ${myName}`}</h1>
      <ul>
      {
        LISTS.map((item)=>{
          return(
            <li>{item}</li>
          )
        })        
      }
      </ul>
    </div>
  );
}
 
export default App;
