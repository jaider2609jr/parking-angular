export interface RutasI {
    features: Feature[];
}

export interface Feature {
    geometry:   Geometry;
}

export interface Geometry {
    coordinates: Array<number[]>;
}
