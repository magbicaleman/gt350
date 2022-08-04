import { createSignal, createRoot } from "solid-js";

function selectedYear() { return createSignal('all') }

export default createRoot(selectedYear);