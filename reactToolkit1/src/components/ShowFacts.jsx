import { useSelector, useDispatch } from "react-redux";

import { showService } from "../slices/showFacts";

export function ShowFact() {
  const facts = useSelector((state) => state.serviceShow);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const quantity = evt.target.value;
    dispatch(showService(quantity));
  }

  return (
    <>
      <input onChange={handleChange} />
      <ul>
        {facts.map(el => <li key={el.key}>{el.fact}</li>)}
      </ul>
    </>
  );
}
