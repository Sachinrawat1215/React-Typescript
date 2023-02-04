import React, { PropsWithChildren } from "react";

// when we use children and we need to use props then we have to use PropsWithChildren it accepts other props with it and we can set those types like this:

type BoxProps = PropsWithChildren<{
    style?: React.CSSProperties
}>;

const Box = ({ children, style }: BoxProps) => {
    return (
        <section
            className="m-4"
            style={{ padding: '1em', border: '5px solid purple', ...style }}
        >
            {children}
        </section>
    );
};

// const Application = (): JSX.Element => {
const Application = (): JSX.Element => {
    return (
        <main className="m-8">
            <Box>
                Just a string.
                <p>Some HTML that is not nested.</p>
                <Box>
                    <h2>Another React component with one child.</h2>
                </Box>
                <Box>
                    <h2 className="mb-4">A nested React component with two children.</h2>
                    <p>The second child.</p>
                </Box>
            </Box>
        </main>
    );
};

export default Application;