import type T from "mod";
import type { U, V } from "mod";
import type * as types from "mod";
import type from "mod";
import type = require("mod");
import type T = require("mod");
import { type X } from "mod";
import { X, type Y} from "mod";
import type { type X } from "mod"; // grammar error
import { type as foo } from "mod"; // not type-only
import { type type } from "mod";
import { type as as as } from "mod";
import { type type as as } from "mod";
import { type type as type } from "mod";
