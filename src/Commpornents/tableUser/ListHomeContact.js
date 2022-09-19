import  React from "react";

const ListHomeContact  = (props) =>{


	const datachurch = props.datachurch;
	const randomColor = props.randomColor1;

	console.log("datachurch", randomColor);

	return(
		<>
			<tbody className="table_user--home" style={{border: "2px solid" + `${randomColor}`}}>
				{datachurch && datachurch.length > 0 && datachurch.map( datachurch =>{
					return(
						<tr  key={datachurch.idPeople}>
							<td  >{datachurch.idHome}</td>
							<td>{datachurch.idPeople}</td>
							<td>{datachurch.name}</td>
							<td>{datachurch.sex}</td>
							<td>{datachurch.reLationShip}</td>
							<td>{datachurch.dateOfBirth}</td>
							<td>{datachurch.phone}</td>
							<td >{datachurch.addRess}</td>
							<td>{datachurch.note}</td>
						</tr>
						)
					} )
				}
		</tbody>

		</>
	)

}

export default ListHomeContact;