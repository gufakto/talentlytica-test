import "./index.css"
import InputSelect from "../InputSelect";
import MhsIcon from "../MhsIcon";
import { FC } from "react";
import { Nilai } from "../../Mahasiswa";

interface Props {
  label: string;
  name: string;
  nilai?: Array<Nilai>;
  onChange?: React.ReactEventHandler<Element>;
  separate?: string; 
}

const Row: FC<Props> = (props) => {



  return (<div className="row">
    <div className="col-4">
      <div className="mhs-label">
        <MhsIcon />
        <label>{props.label}</label>
      </div>
    </div>
    <div className="col-8">
      <div className="row">
        {props.nilai?.length && props.nilai.map((item, i) => 
        (<div className="col-3" key={i}>
          <InputSelect name={`${props.name}${props.separate??'#'}${item.attribute}`} onChange={props.onChange} />
        </div>))}
      </div>
    </div>
  </div>);
}

export default Row;