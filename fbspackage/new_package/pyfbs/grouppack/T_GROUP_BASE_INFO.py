# automatically generated by the FlatBuffers compiler, do not modify

# namespace: grouppack

import flatbuffers

class T_GROUP_BASE_INFO(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GROUP_BASE_INFO(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GROUP_BASE_INFO()
        x.Init(buf, n + offset)
        return x

    # T_GROUP_BASE_INFO
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GROUP_BASE_INFO
    def GroupId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_BASE_INFO
    def GroupName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GROUP_BASE_INFO
    def GroupImgUrl(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GROUP_BASE_INFO
    def GroupCount(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_BASE_INFO
    def GroupManagerUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_BASE_INFO
    def GroupAddIsAgree(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_BASE_INFO
    def GroupCt(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_BASE_INFO
    def GroupRemark(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GROUP_BASE_INFO
    def GroupMaxCount(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_BASE_INFO
    def MessageStatus(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_BASE_INFO
    def GroupAddMaxCount(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(24))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

def T_GROUP_BASE_INFOStart(builder): builder.StartObject(11)
def T_GROUP_BASE_INFOAddGroupId(builder, groupId): builder.PrependUint64Slot(0, groupId, 0)
def T_GROUP_BASE_INFOAddGroupName(builder, groupName): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(groupName), 0)
def T_GROUP_BASE_INFOAddGroupImgUrl(builder, groupImgUrl): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(groupImgUrl), 0)
def T_GROUP_BASE_INFOAddGroupCount(builder, groupCount): builder.PrependInt32Slot(3, groupCount, 0)
def T_GROUP_BASE_INFOAddGroupManagerUserId(builder, groupManagerUserId): builder.PrependUint64Slot(4, groupManagerUserId, 0)
def T_GROUP_BASE_INFOAddGroupAddIsAgree(builder, groupAddIsAgree): builder.PrependInt8Slot(5, groupAddIsAgree, 0)
def T_GROUP_BASE_INFOAddGroupCt(builder, groupCt): builder.PrependUint64Slot(6, groupCt, 0)
def T_GROUP_BASE_INFOAddGroupRemark(builder, groupRemark): builder.PrependUOffsetTRelativeSlot(7, flatbuffers.number_types.UOffsetTFlags.py_type(groupRemark), 0)
def T_GROUP_BASE_INFOAddGroupMaxCount(builder, groupMaxCount): builder.PrependInt32Slot(8, groupMaxCount, 0)
def T_GROUP_BASE_INFOAddMessageStatus(builder, messageStatus): builder.PrependInt8Slot(9, messageStatus, 0)
def T_GROUP_BASE_INFOAddGroupAddMaxCount(builder, groupAddMaxCount): builder.PrependInt32Slot(10, groupAddMaxCount, 0)
def T_GROUP_BASE_INFOEnd(builder): return builder.EndObject()
