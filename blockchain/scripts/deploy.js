async function main() {
  const Loktantra = await ethers.getContractFactory("Loktantra");
  const loktantra = await Loktantra.deploy();
  await loktantra.waitForDeployment();
  console.log("Loktantra deployed to:", await loktantra.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});