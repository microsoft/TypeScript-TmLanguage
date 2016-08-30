            return this.travelWorld((cell: Cell) => {
                cell.live = Math.random() < this.initialLifeProbability;
                return cell;
            });