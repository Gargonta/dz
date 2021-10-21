import React from "react"
import classes from "./ItemList.module.scss"
import Users from "./Users/Users"

export default function ItemList({id, name, open, formOpen, clickCompany, clickForm}) {
	return (
		<div className={classes.ItemList}>
			<div
				className={classes.NameBlock}
				onClick={() => clickCompany(id)}
				data-active={open ? "Y" : null}
			>
				<p>{name}</p>

				<span>
					<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M5.68198 4.26777L1.41421 0L0 1.41421L4.94975 6.36396L4.97487 6.33883L5.70711 7.07107L11.364 1.41421L9.94975 0L5.68198 4.26777Z" fill="#8578EC"/>
					</svg>
				</span>		
			</div>

			{open ? (
				<Users
					formOpen={formOpen}
					clickForm={clickForm}
					id={id}
				/>
			) : null}
		</div>
	)
}