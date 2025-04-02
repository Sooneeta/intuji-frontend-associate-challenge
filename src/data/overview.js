import EmptyWalletIcon from "../assets/icons/empty-wallet.svg";
import SavingIcon from "../assets/icons/save-2.svg";
import DirectUpIcon from "../assets/icons/direct-up.svg";
import DirectDownIcon from "../assets/icons/direct-down.svg";
import GreenExportIcon from "../assets/icons/export-green.svg";
import BlueExportIcon from "../assets/icons/export-blue.svg";
import PinkExportIcon from "../assets/icons/export-pink.svg";
import YellowExportIcon from "../assets/icons/export-yellow.svg";

const overview = [
  {
    title: "Your Balance",
    icon: EmptyWalletIcon,
    description: "15 % compared with last month",
    descriptionIcon: GreenExportIcon,
    amount: "$ 28,891.138",
  },
  {
    title: "Saving",
    icon: SavingIcon,
    description: "10 % compared with last month",
    descriptionIcon: PinkExportIcon,
    amount: "$ 1,050.44",
  },

  {
    title: "Expenses",
    icon: DirectUpIcon,
    description: "2 % compared with last month",
    descriptionIcon: YellowExportIcon,
    amount: "$ 200.31",
  },

  {
    title: "Incomes",
    icon: DirectDownIcon,
    description: "8 % compared with last month",
    descriptionIcon: BlueExportIcon,
    amount: "$ 21,121.0",
  },
];

export { overview };
