import React from "react";
import styles from "./Specifications.module.css"

const Specifications = ({vehicle}) => {
    return (
        <div>
            <h3 className={styles.h3}>{vehicle.brand+" "+vehicle.generation+" "+vehicle.variant}</h3>
            <h4 className={styles.h4}>General Information</h4>
            <p className={styles.p}>Brand: {vehicle.brand}</p>
            <p className={styles.p}>Model: {vehicle.model}</p>
            <p className={styles.p}>Generation: {vehicle.generation}</p>
            <p className={styles.p}>Variant: {vehicle.variant}</p>
            <p className={styles.p}>Start of production: {vehicle.startOfProduction}</p>
            <p className={styles.p}>End of production: {vehicle.endOfProduction}</p>
            <p className={styles.p}>Powertrain architecture: {vehicle.powertrainArchitecture}</p>
            <p className={styles.p}>Body type: {vehicle.bodyType}</p>
            <p className={styles.p}>Seats: {vehicle.seats}</p>
            <p className={styles.p}>Doors: {vehicle.doors}</p>
            <h4 className={styles.h4}>Performance specs</h4>
            <p className={styles.p}>Fuel consumption - urban: {vehicle.fuelConsumptionUrban}</p>
            <p className={styles.p}>Fuel consumption - extra urban: {vehicle.fuelConsumptionExtraUrban}</p>
            <p className={styles.p}>Fuel consumption - combined: {vehicle.fuelConsumptionCombined}</p>
            <p className={styles.p}>CO<sub>2</sub> emissions: {vehicle.co2Emissions}</p>
            <p className={styles.p}>Fuel type: {vehicle.fuelType}</p>
            <p className={styles.p}>Acceleration 0 - 100 km/h: {vehicle.acceleration0to100}</p>
            <p className={styles.p}>Maximum speed: {vehicle.maximumSpeed}</p>
            <p className={styles.p}>Emission standard: {vehicle.emissionStandard}</p>
            <h4 className={styles.h4}>Engine specs</h4>
            <p className={styles.p}>Power: {vehicle.power}</p>
            <p className={styles.p}>Torque: {vehicle.torque}</p>
            <p className={styles.p}>Engine location: {vehicle.engineLocation}</p>
            <p className={styles.p}>Engine model: {vehicle.engineModel}</p>
            <p className={styles.p}>Engine displacement: {vehicle.engineDisplacement}</p>
            <p className={styles.p}>Number of cylinders: {vehicle.numberOfCylinders}</p>
            <p className={styles.p}>Position of cylinders: {vehicle.positionOfCylinders}</p>
            <p className={styles.p}>Fuel system: {vehicle.fuelSystem}</p>
            <p className={styles.p}>Engine Aspiration: {vehicle.engineAspiration}</p>
            <p className={styles.p}>Engine oil capacity: {vehicle.engineOilCapacity}</p>
            <h4 className={styles.h4}>Weight and volume</h4>
            <p className={styles.p}>Kerb weight: {vehicle.kerbWeight}</p>
            <p className={styles.p}>Max weight: {vehicle.maxWeight}</p>
            <p className={styles.p}>Trunk space: {vehicle.trunkSpace}</p>
            <p className={styles.p}>Fuel tank capacity: {vehicle.fuelTankCapacity}</p>
            <h4 className={styles.h4}>Dimensions</h4>
            <p className={styles.p}>Length: {vehicle.length}</p>
            <p className={styles.p}>Width: {vehicle.width}</p>
            <p className={styles.p}>Height: {vehicle.height}</p>
            <p className={styles.p}>Wheelbase: {vehicle.wheelbase}</p>
            <p className={styles.p}>Ride height: {vehicle.rideHeight}</p>
            <p className={styles.p}>Minimum turning cycle: {vehicle.minimumTurningCycle}</p>
            <h4 className={styles.h4}>Drivetrain</h4>
            <p className={styles.p}>Drivetrain architecture: {vehicle.drivetrainArchitecture}</p>
            <p className={styles.p}>Number of gears and gearbox: {vehicle.numberOfGearsAndGearbox}</p>
            <p className={styles.p}>Front suspension: {vehicle.frontSuspension}</p>
            <p className={styles.p}>Rear suspension: {vehicle.rearSuspension}</p>
        </div>
    )
}

export default Specifications;