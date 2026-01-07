async function main() {
  const Loktantra = await ethers.getContractFactory("Loktantra");
  console.log("Deploying Loktantra contract...");
  
  const loktantra = await Loktantra.deploy();
  await loktantra.deployed();
  
  console.log("Loktantra deployed to:", loktantra.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
