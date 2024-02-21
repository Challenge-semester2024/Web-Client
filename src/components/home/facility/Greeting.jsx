import profile from "assets/profile.png";
import { useState } from "react";
import "styles/home/facility/Greeting.scss";
const Greeting = () => {
  const [decadeSelectors, setDecadeSelectors] = useState([true]);
  const [yearSelectors, setYearSelectors] = useState([[true]]);
  const [decades, setDecades] = useState([""]); // decade 상태 추가
  const [years, setYears] = useState([[""]]); // year 상태 추가
  const [inputs, setInputs] = useState([[""]]); // input 상태 추가

  const addDecadeSelector = () => {
    setDecadeSelectors([...decadeSelectors, true]);
    setYearSelectors([...yearSelectors, [true]]);
    setDecades([...decades, ""]); // decade 상태 추가
    setYears([...years, [""]]); // year 상태 추가
    setInputs([...inputs, [""]]); // input 상태 추가
  };

  const addYearSelector = (index) => {
    let newYearSelectors = [...yearSelectors];
    newYearSelectors[index] = [...newYearSelectors[index], true];
    setYearSelectors(newYearSelectors);

    let newYears = [...years];
    newYears[index] = [...newYears[index], ""];
    setYears(newYears);

    let newInputs = [...inputs];
    newInputs[index] = [...newInputs[index], ""];
    setInputs(newInputs);
  };

  const handleDecadeChange = (index, value) => {
    let newDecades = [...decades];
    newDecades[index] = value;
    setDecades(newDecades);
  };

  const handleYearChange = (decadeIndex, yearIndex, value) => {
    let newYears = [...years];
    newYears[decadeIndex][yearIndex] = value;
    setYears(newYears);
  };

  const handleInputChange = (decadeIndex, inputIndex, value) => {
    let newInputs = [...inputs];
    newInputs[decadeIndex][inputIndex] = value;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    let result = decades.map((decade, i) => ({
      decade,
      years: years[i],
      inputs: inputs[i],
    }));

    console.log(result);
  };
  return (
    <div className="greeting-container">
      <div className="greeting-content-container">
        <div className="greeting-image-container">
          <img className="progile-iamge" src={profile} alt="profile" />
        </div>
        <div className="greeting-message-container">
          <span className="greeting-message-tooltip">
            간단한 인사말을 작성해주세요
          </span>
          <textarea
            className="greeting-message-input"
            type="text"
            placeholder="안녕하세요 아지트입니다."
          />
        </div>
      </div>
      <div className="history-container">
        <div className="history-content-container">
          {decadeSelectors.map((_, index) => (
            <div className="one-decade" key={index}>
              <div className="decade-container">
                <select
                  className="decade-option"
                  value={decades[index]}
                  onChange={(e) => handleDecadeChange(index, e.target.value)}
                >
                  <option value="연도 선택">연도 선택</option>
                  <option value="2000">2000~</option>
                  <option value="2010">2010~</option>
                  <option value="2020">2020~</option>
                </select>
                <button onClick={addDecadeSelector}>추가+</button>
              </div>
              {yearSelectors[index].map((_, i) => (
                <div key={i}>
                  <select
                    className="year-container"
                    value={years[index][i]}
                    onChange={(e) => handleYearChange(index, i, e.target.value)}
                  >
                    <option value="연도 선택">연도 선택</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                  </select>
                  <input
                    className="history-input"
                    type="text"
                    value={inputs[index][i]}
                    onChange={(e) =>
                      handleInputChange(index, i, e.target.value)
                    }
                  />
                  {i === yearSelectors[index].length - 1 && (
                    <button
                      className="year-add-btn"
                      onClick={() => addYearSelector(index)}
                    >
                      추가+
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className="history-submit-btn"
          type="button"
          onClick={handleSubmit}
        >
          변경사항 저장
        </button>
      </div>
    </div>
  );
};

export default Greeting;
