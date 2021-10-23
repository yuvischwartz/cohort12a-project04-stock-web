import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className={'grid grid-cols-12'}>
            <div className={'col-span-12 border p-3'}>
              <h1 className={'main-title text-center font-bold'}>Paper Trader</h1>
            </div>
        
            <div className={'col-span-12 md:col-span-6 border p-5'}>
              <h1 className={'text-2xl text-center font-bold'}>Box 1</h1>
          

              <div className={'grid grid-cols-12'}>
                <div className={'col-span-12 border p-3'}>Box3</div>
               <div className={'col-span-12 md:col-span-6 border p-3'}>
                 {/* Box 4 */}
                <h1 className={'sub-title text-2xl text-center'}>BHP - BHP Group Limited</h1>
              </div>
            <div className={'col-span-12 md:col-span-6 border p-3'}>
              {/* Box 5 */}
          
              <div className={'col-span-12 md:col-span-6 flex justify-center'}>
                  
                    <button className={'btn bg-blue-600 hover:bg-blue-500 m-2 rounded '}>Buy</button>
                  
                    <button className={'btn bg-red-600 hover:bg-red-500 m-2 rounded'}>Sell</button>
                </div>
              </div>
                <div className={'col-span-12 border p-3'}>Box 6</div>
              </div>
            </div>
        
    

            <div className={'col-span-12 md:col-span-6 border p-5'}>
            <h1 className={'text-2xl text-center font-bold'}>Box 2</h1>
            <table className={'border w-full'}>
              <tr className={'border'}>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr className={'border'}>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr className={'border'}>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>         
            </div>
      </div>
      
    </>
  );
}

export default App;
