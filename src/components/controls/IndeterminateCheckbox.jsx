import React, {forwardRef, Fragment} from "react";

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate]);

    return (
      <Fragment>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </Fragment>
    )
  }
);

export default IndeterminateCheckbox;