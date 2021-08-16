import {FC, useState} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Button, FormControl, InputLabel} from '@material-ui/core';
import {useStyles} from './OrganizationSelector.styles';
import {Organization} from './MultiTenancyAuth0Provider';


type OrganizationSelectorProps = {
    organizations: Organization[]
    selectOrganization: (org: Organization) => void
}

export const OrganizationSelector: FC<OrganizationSelectorProps> = ({selectOrganization, organizations}) => {
    const classes = useStyles();
    const [selectedOrganization, setOrganization] = useState<Organization>();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.label}>Select your organization</InputLabel>
                    <Select
                        classes={{
                            select: classes.select,
                            icon: classes.selectIcon
                        }}
                        value={selectedOrganization?.id}
                        onChange={(e) => {
                            const org = organizations.find(o => o.id === e.target.value);
                            org && setOrganization(() => org);
                        }}
                    >
                        {organizations.map((org) => (
                            <MenuItem key={org.id} value={org.id}>{org.name}</MenuItem>
                        ))}
                    </Select>
                    {selectedOrganization && (
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={() => selectedOrganization && selectOrganization(selectedOrganization)}
                        >
                            Next
                        </Button>
                    )}
                </FormControl>
            </div>
        </div>
    );
};