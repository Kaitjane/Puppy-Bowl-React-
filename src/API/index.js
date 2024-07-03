const COHORT = "2403-FTB-ET-WEB-PT";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createNewPlayer(newPlayer) {
  try {
    const response = await fetch(`${baseUrl}/${playerId}`, {
      method: "POST",
      headers: "Content-Type",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new player");
  }
}

export async function fetchPlayerByID(playerId) {
  try {
    const response = await fetch(`${baseUrl}/${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch player details");
  }
}

export async function fetchPlayerDetails(playerId) {
  try {
    const response = await fetch(`${baseUrl}/${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch player details");
  }
}

/**export const {
  useFetchCreateNewPlayer,
  useAddPlayerByID,
  useFetchPlayerDetails,
} = puppyBowlApi; **/
