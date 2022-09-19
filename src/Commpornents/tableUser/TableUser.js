import React, {useState} from "react";
import ListHomeContact from "./ListHomeContact";
//html table


const TableUser = () =>{

		const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

	
	const [datachurch, setChurch] = useState([
		{idHome: '1',
		idPeople: '1',
		idMember: '3',
		name: "Nguyễn Văn A",
		sex:"Nam" ,
		reLationShip: "Chồng",
		dateOfBirth: "1-1-1995",
		phone:'0344465175', addRess:'95 Hồng sến, P.Long Thạnh Mỹ, Q.9', note: "1", clearColum: "d-block" },

		{idHome: '1',
		idPeople: '2',
		idMember: '3',
		name: "Phạm Thị Mỹ Trang",
		sex:"Nữ" ,
		reLationShip: "Vợ",
		dateOfBirth: "22-10-1963",
		phone:'090 8861 871', addRess:'', note: "1" ,clearColum: "d-none" },

		{idHome: '1',
		idPeople: '3',
		idMember: '3',
		name: "Hà Hoa Tưởng Dung",
		sex:"Nữ" ,
		reLationShip: "Con",
		dateOfBirth: "1-1-1995",
		phone:'0344465175', addRess:'', note: "", clearColum: "d-none" }

	]);


	console.log("randomColor1:", randomColor)

	return(
		<>
		
		<section className="table">
			<div className="wrp-container">
				<h2 className="table--hdg-lv2 hdg-lv3">DANH SÁCH</h2>
				<p className="table--p txt-content">Cập nhật lần cuối : 2/2/2049</p>
				<div className="tbl-base--scrollable">
					<table className="table_user w600px--sp ">
					<colgroup>
						<col className="w5per"></col>
						<col className="w8per"></col>
						<col className="w10per"></col>
						<col className="w5per"></col>
						<col className="w10per"></col>
						<col className="w15per"></col>
						<col className="w10per"></col>
						<col className="w30per"></col>
						<col className="w7per"></col>
						</colgroup>
					<thead>
						<tr>
							<th>Mã Hộ</th>
							<th>Mã Định Danh</th>
							<th>Họ Và Tên</th>
							<th>Giới Tính</th>
							<th>Quan hệ Gia Đình</th>
							<th>Ngày Tháng Năm Sinh</th>
							<th>Số Điện Thoại</th>
							<th>Địa Chỉ</th>
							<th>Ghi Chú</th>
						</tr>
					</thead>
					
		

					<ListHomeContact datachurch={datachurch} randomColor1= {randomColor}/>
					<ListHomeContact datachurch={datachurch} randomColor1= {randomColor}/>
					<ListHomeContact datachurch={datachurch} randomColor1= {randomColor}/>
					
						
				</table>
				</div>
			</div>
			
		</section>
		
		</>
	)

}

export default TableUser;