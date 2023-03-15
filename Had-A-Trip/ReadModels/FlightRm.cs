namespace Had_A_Trip.ReadModels
{
    public record FlightRm(
        Guid? id,
        string airline,
        string price,
        TimePlaceRm arrival,
        TimePlaceRm departure,
        int remainingSeats
        );
}
