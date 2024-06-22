import './section1.css'
const Section1 = () => {
  return (
    <div className="my-20 section-bg-img py-32 bg-fixed">
      <div className="max-w-7xl mx-auto">
        <div className=" text-white mb-10">
          <h2 className="text-5xl font-bold mb-5">PRIMARY LEAGUE STANDING</h2>
          <p>
            In a stunning turn of events, the baseball world is buzzing with
            excitement as a <br /> whirlwind of developments unfolds both on and
            off the field.
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-8 ">
          <div className="lg:w-[70%] w-full">
            <div className="overflow-x-auto">
              <table className="table text-white font-bold ">
                {/* head */}
                <thead>
                  <tr className="text-xl bg-red-600 text-white uppercase border-0">
                    <th>pos</th>
                    <th>team</th>
                    <th>w</th>
                    <th>l</th>
                    <th>pct</th>
                    <th>gb</th>
                    <th>rs</th>
                    <th>ra</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-black border-0">
                    <th>1</th>
                    <td>Bluebirds</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1.000</td>
                    <td>0</td>
                    <td>22</td>
                    <td>0</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-0">
                    <th>1</th>
                    <td>Eagles</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0.500</td>
                    <td>0</td>
                    <td>22</td>
                    <td>0</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="bg-black border-0">
                    <th>1</th>
                    <td>Kangaroos</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0.000</td>
                    <td>0</td>
                    <td>0</td>
                    <td>22</td>
                  </tr>
                  {/* row 4*/}
                  <tr className="border-0">
                    <th>3</th>
                    <td>The Lions</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0.000</td>
                    <td>0</td>
                    <td>0</td>
                    <td>22</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
            <div className="mt-5 text-center">
                <button className="uppercase font-bold text-xl w-full btn text-white hover:bg-black bg-red-600">
                  view full table
                </button>
              </div>
          </div>
          <div className="lg:w-[30%] w-full">
          <div className="overflow-x-auto">
  <table className="table uppercase font-bold ">
    {/* head */}
    <thead>
      <tr className="bg-red-600 text-xl text-center text-white border-0">
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="text-white text-center border-0">
        <th>March 5, 2022 <br /> 0-11 <br />BLUEBIRDS VS EAGLES</th>
        
      </tr>
      {/* row 2 */}
      <tr className="text-white text-center bg-black">
        <th>March 5, 2022 <br /> 0-11 <br /> EAGLES VS KANGAROOS</th>
        
      </tr>
     
    </tbody>
  </table>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
